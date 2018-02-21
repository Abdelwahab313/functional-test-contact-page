module.exports = {
  'Form fields exist' : function (client){
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 8000)
      .assert.visible('input[type=text]')
      .assert.visible('input[type=email]')
      .waitForElementVisible('input[type=submit]', 5000)
      .assert.visible('input[type=submit]')
      .pause(1000)
  },

  'Form submit button disabled with empty data ' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 8000)
      .setValue('input[name=fname]', '')
      .setValue('input[name=email]', '')
      .waitForElementVisible('input[type=submit]', 5000)
      .pause(1000)
      .assert.attributeContains('input[type=submit]', 'disabled', 'true' )
      .end()  
  },

  'Form submit button disabled with invalid email ' : function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 8000)
      .setValue('input[name=fname]', 'asd')
      .setValue('input[name=email]', 'asdfdafd')
      .waitForElementVisible('input[type=submit]', 5000)
      .pause(1000)
      .assert.attributeContains('input[type=submit]', 'disabled', 'true' )
      .end()  
  },

  'Form submit button enabled with valid data' : function(client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 8000)
      .assert.visible('input[type=text]')
      .setValue('input[name=fname]', 'TestName')
      .setValue('input[name=email]', 'test@mail.com')
      .waitForElementVisible('input[type=submit]', 5000)
      .pause(1000);
      client.expect.element('input[type=submit]').to.be.enabled;
      client.end();
  },

  'Feedback submitted successfully ' : function(client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 8000)
      .assert.visible('input[type=text]')
      .setValue('input[name=fname]', 'TestName')
      .setValue('input[name=email]', 'test@mail.com')
      .waitForElementVisible('input[type=submit]', 5000)
      .pause(1000)
      .click('input[type=submit]') 
      .assert.visible('span.submitted')  
      client.end();
  },

}