async function testAsync () {
  return 'Hello async';
}

function getSomthing () { 
  return 'something';
}

async function test () {
  const v1 = await getSomthing();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();

function takeLongTime () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('long_time_value', 1000);
    }, 1000);
  })
}

async function test2 () {
  const v = await takeLongTime();
  console.log(v);
}

test2();