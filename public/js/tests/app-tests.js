
QUnit.test('first name was clicked', function(assert) {
  // $('#qunit-fixture') can be found on the testrunner.html
  let fixture = $('#qunit-fixture');
  // append the subject under test
  fixture.append( $('<p id="first_name">Tests</p>') )
  // assert that it's been appended
  assert.equal( $('p', fixture).length, 1, '200')
  // define the function
  clicker = new functions.clickMe
  // trigger the click
  $('#first_name').trigger('click');
  // the big assert!
  assert.equal( $('p', fixture).text(), 'Prank')
});

QUnit.test('this shit is bananas', function(assert) {
  let fixture = $('#qunit-fixture');
  fixture.append( $('<p id="first_name">Tests</p>') )
})

