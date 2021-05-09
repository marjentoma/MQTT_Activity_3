
// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

var pub_button = document.getElementById('publishButton');
var pub_topic = document.getElementById('publishTopic');
var pub_payload = document.getElementById('publishPayload');
var sub_button = document.getElementById("subscribeButton");
var topicToSub = document.getElementById("subscribeTopic");

client.on('connect', function () {
  console.log('connected');
  sub_button.addEventListener('click', () => {
    client.subscribe(topicToSub.value, function (err) {
      if (!err) {
        client.publish(topicToSub.value, pub_payload.value);
        // alert(pub_payload.value)
        
        console.log("Topic exist")
      } else {
        alert("Topic does not exist");
      }
    })
  })
})
var topicDiv=document.getElementById("publishTopic");
var messageDiv=document.getElementById("message");
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic.toString())
  console.log(message.toString())
  topicDiv.innerHTML+="<p>"+topic.toString()+"</p>";
  messageDiv.innerHTML+=message.toString()+"<br>";
  console.log(topic);
  //   client.end()
})


pub_button.addEventListener('click', () => {
  // console.log('clicked');
  console.log(pub_topic.value);
  console.log(pub_payload);
  client.publish(pub_topic.value, pub_payload.value);
  
})