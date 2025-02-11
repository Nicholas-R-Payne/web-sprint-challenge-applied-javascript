import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsDiv = document.createElement('div');
  const javascriptTopic = document.createElement('div');
  const bootstrapTopic = document.createElement('div');
  const technologyTopic = document.createElement('div');
  const jqueryTopic = document.createElement('div');
  const nodeTopic = document.createElement('div');

  topicsDiv.classList.add('topics');
  javascriptTopic.classList.add('tab');
  bootstrapTopic.classList.add('tab');
  technologyTopic.classList.add('tab');
  jqueryTopic.classList.add('tab');
  nodeTopic.classList.add('tab');

  javascriptTopic.textContent = topics[0];
  bootstrapTopic.textContent = topics[1];
  technologyTopic.textContent = topics[2];
  jqueryTopic.textContent = topics[3];
  nodeTopic.textContent = topics[4];


  topicsDiv.appendChild(javascriptTopic);
  topicsDiv.appendChild(bootstrapTopic);
  topicsDiv.appendChild(technologyTopic);
  topicsDiv.appendChild(jqueryTopic);
  topicsDiv.appendChild(nodeTopic);

  return topicsDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

    axios.get('http://localhost:5000/api/topics')
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch(err => {
      console.log(err);
    })

}

export { Tabs, tabsAppender }
