const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5,
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7,
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5,
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9,
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0,
    },
];

const productSelect = document.querySelector("#product");

productSelect.innerHTML = `
    <option value="" selected disabled hidden>Select a Product...</option>
`;

products.forEach(p => {
    const option = document.createElement("option");
    option.innerHTML = p.name;
    option.value = p.id;

    productSelect.appendChild(option);
});


const submitButton = document.querySelector("input[type=submit");
submitButton.addEventListener("click", e => {
    const reviewCount = Number(localStorage.getItem("reviewCount")) + 1;
    localStorage.setItem("reviewCount", reviewCount);
});