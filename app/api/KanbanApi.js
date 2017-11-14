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
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVhMDAxNjQ3NGM2MWMyMWVkNDE5ZGRlNSIsInVzZXJuYW1lIjoicGlvdHJlbCIsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE1MTA2Njg2NzksImV4cCI6MTUxMDY5NzQ3OX0.ZNN935mQIix9OQW-S8r1lSkKSp_eokH7QMQ-VZ7s58g'
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
