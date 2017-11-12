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
<<<<<<< HEAD
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5ZmM1Nzc5YjI5Y2EyMzczYzI2NzZkOSIsInVzZXJuYW1lIjoibXJ6eWdsb3N6Iiwic2NvcGUiOiJhZG1pbiIsImlhdCI6MTUxMDA5MTU1NSwiZXhwIjoxNTEwMDk1MTU1fQ.8LsimaSk_zEgVF7XE3cQxggIBktl2slBsXLxDeo36P8'
=======
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVhMDAxNjQ3NGM2MWMyMWVkNDE5ZGRlNSIsInVzZXJuYW1lIjoicGlvdHJlbCIsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE1MTAyMzM1MjksImV4cCI6MTUxMDIzNzEyOX0.zRyx4Z505bgu5egxomRkm7WVYusv8oJVmkn4kQkSaqk'
>>>>>>> bb0e0ff9a9a2725b8376b9144820fd6addb0b49e
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
