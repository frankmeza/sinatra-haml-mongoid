QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('a real test now', function (assert) {
  assert.equal(square(2), 4);
});
