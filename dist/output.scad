$fn=100;
difference()
{
  sphere(r = 50);
  rotate(a = [0, 0, 0], v = undef)
  {
    cylinder(h = 125, r = 25, center = true);
  }
  #union()
  {
    rotate(a = [0, 90, 0], v = undef)
    {
      cylinder(h = 125, r = 25, center = true);
    }
  }
  rotate(a = [90, 0, 0], v = undef)
  {
    cylinder(h = 125, r = 25, center = true);
  }
}

