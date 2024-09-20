async function getData() {
  let data = await fetch("data.json");
  let json = await data.json();
  console.log(json);
}

getData();
