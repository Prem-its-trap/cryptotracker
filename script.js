const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

fetch(url, {
  method: "GET",
  mode: "cors",
})
  .then((data) => {
    return data.json();
  })
  .then((obj) => {
    console.log(obj);
    let name =
      '<div style="display:flex; flex-wrap:wrap; padding: 0; margin: 10px 20px">' +
      obj
        .map(
          (value) => `
    <div class="card">
      <div class="product-header">
        <img src="${value.image}" class="img-fluid" style="height:50px; width:50px"/>
        <div class="coinName">
        <span>${value.name}</span>
        <p>${value.name}</p>
        </div>
      </div>
      <div class="product-content">
        <button>${value.atl} %</button>
      </div> 
      <br>
      <div class="product-content">
        <h5>$${value.current_price}</h5><Br>
        <p>Total Volume: ${value.total_volume}</p>
        <p>Total Volume: ${value.market_cap}</p>

      </div>
    </div>`
        )
        .join("") +
      "</div>";

    let list =
      '<div style="display:flex; flex-direction: column; padding: 0; margin: 10px 20px">' +
      obj
        .map(
          (value) => `
                <div class="row">
                    <div class="col-sm-3" style="display:flex">
                    <img src="${value.image}" class="img-fluid" style="height:30px; width:30px"/> &nbsp;&nbsp;
                    <div class="coinName" style="color:white">
        <span>${value.name}</span>
        <p>${value.name}</p>
        </div>
                    </div>
                    <div class="col-sm-2">
                    <div class="product-content">
                    <button style="font-size:12px">${value.atl} %</button>
                  </div>
                    </div>
                    <div class="col-sm-3"><h6 style="color:#7CC578">$${value.current_price}</h6></div>
                    <div class="col-sm-2">
                    <p style="color:white">Total Volume: ${value.total_volume}</p></div>
                    <div class="col-sm-2"><p style="color:white">Total Volume: ${value.market_cap}</p></div>

                </div>
          `
        )
        .join("") +
      "</div>";

    document.getElementById("grid").innerHTML = name;
    document.getElementById("list").innerHTML = list;
  }).catch(err => console.log(err));

//   returncards()
