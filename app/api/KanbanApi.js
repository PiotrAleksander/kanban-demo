import 'whatwg-fetch';
import 'babel-polyfill';

const API_URL = 'http://localhost:3000/api';
const API_HEADERS = {
  'Content-Type': 'application/json',
  /*
   * Change the Authorization to any string you like. It can be your pet's name,
   * your middle name, your favorite animal, your superpower of choice...
   * An unique authorization will allow you to have your own environment for leads and tasks
   */
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5ZmM1Nzc5YjI5Y2EyMzczYzI2NzZkOSIsInVzZXJuYW1lIjoibXJ6eWdsb3N6Iiwic2NvcGUiOiJhZG1pbiIsImlhdCI6MTUxMDUxMTk1NywiZXhwIjoxNTEwNTE1NTU3fQ.r5GMnXsJeoapRNqZaPrP8gLnPF3F9OtTlfBaRntBxiI'
}

let KanbanAPI = {
  fetchCards() {
    return fetch(`${API_URL}/leads`, { headers: API_HEADERS })
      .then((response) => response.json())
  },

  addCard(card) {
    return fetch(`${API_URL}/leads`, {
      method: 'post',
      body: JSON.stringify(card)
    })
      .then((response) => response.json())
  },
  
  deleteCard(cardId) {
    return fetch(`${API_URL}/leads/${cardId}`, {
      method: 'delete',
      headers: API_HEADERS
    })
  },

  updateCard(card, draftCard) {
    delete draftCard.id;
    return fetch(`${API_URL}/leads/${card.id}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify(draftCard)
    })
  },

  toggleCardDetails(cardId) {
    return fetch(`${API_URL}/leads/${card.id}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify(draftCard)
    })
  },

  persistCardDrag(cardId, status, index) {
    return fetch(`${API_URL}/leads/${cardId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({ status, row_order_position: index })
    })
  },

  addTask(cardId, task) {
    return fetch(`${API_URL}/leads/${cardId}/tasks`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(task)
    })
      .then((response) => response.json())
  },

  deleteTask(cardId, task) {
    return fetch(`${API_URL}/leads/${cardId}/tasks/${task.id}`, {
      method: 'delete',
      headers: API_HEADERS
    })
  },

  toggleTask(cardId, task) {
    return fetch(`${API_URL}/leads/${cardId}/tasks/${task.id}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({ done: !task.done })
    })
  }

};

export default KanbanAPI;
