QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
  var ds = new App.DataStore();
  assert.equal(ds, undefined)
});
