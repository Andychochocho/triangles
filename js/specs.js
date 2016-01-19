describe ("triangleType", function() {
  it("is true if all sides are the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side", function(){
    expect(triangle_tracker(0,1,2)).to.equal(true);
  });
  it('is true if no sides are not equal', function() {
    expect(triangle_tracker(12,6,14)).to.equal(true);
  })
  it("is true if two sides are equal", function(){
    expect(triangle_tracker(2,2,1)).to.equal(true);
  })
  it('is true if all sides are equal',function(){
    expect(triangle_tracker(3,3,3)).to.equal(true);
  })
});
