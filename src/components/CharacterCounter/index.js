import {Components} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Components {
  state = {
    searchInput: '',
    wordList: [],
  }

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordList: [...prevState.wordList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordList} = this.state
    return (
      <div className="main-container">
        <div className="first-container">
          <h1 className="first-heading">Count the characters like a Boss</h1>

          <div className="container">
            {wordList.length > 0 ? (
              <ul className="list-container">
                {wordList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </div>
        </div>

        <div className="second-container">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form onSubmit={this.Start}>
              <div className="input-container">
                <input
                  type="text"
                  className="inputName"
                  placeholder="Enter the character here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button
                  className="add-button"
                  type="submit"
                  onClick={this.Start}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
