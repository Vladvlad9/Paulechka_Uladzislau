const app = document.getElementById("app")

const data = [
    {
        "id": 0,
        "name": "Смартфон HONOR 90 8GB/256GB международная версия (изумрудный зеленый)",
        "img": "https://content2.onliner.by/catalog/device/header/ccd00bad2477cdfc6e297367c33629e6.jpeg",
        "description": "Android, экран 6.7\" AMOLED (1200x2664) 120 Гц, Qualcomm Snapdragon 7 Gen 1 " +
            "Accelerated Edition, ОЗУ 8 ГБ, память 256 ГБ, камера 200 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM/eSIM)",
    },
    {
        "id": 1,
        "name": "Смартфон POCO F5 12GB/256GB международная версия (черный)",
        "img": "https://content2.onliner.by/catalog/device/header/abe909de42d62c1b0fba1e7df5b956e5.jpeg",
        "description": "Android, экран 6.67\" AMOLED (1080x2400) 120 Гц, Qualcomm Snapdragon 7+ Gen 2, ОЗУ 12 ГБ, " +
            "память 256 ГБ, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP53",
    },
    {
        "id": 2,
        "name": "Смартфон Apple iPhone 12 Pro 128GB Восстановленный by Breezy, грейд B (серебристый)",
        "img": "https://content2.onliner.by/catalog/device/header/b6b2bad1601395e9ed3810b72e2bcfa6.png",
        "description": "Apple iOS, экран 6.1\" OLED (1170x2532) 60 Гц, Apple A14 Bionic, ОЗУ 6 ГБ, " +
            "память 128 ГБ, камера 12 Мп, аккумулятор 2775 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP68",
    },
    {
        "id": 3,
        "name": "Смартфон Infinix Hot 30i X669D 8GB/128GB (кристально-белый)",
        "img": "https://content2.onliner.by/catalog/device/header/61cf5532a4a85446a1bcae7203ab90f8.jpeg",
        "description": "Android, экран 6.56\" IPS (720x1612) 90 Гц, UniSoC Tiger T606, ОЗУ 8 ГБ, " +
            "память 128 ГБ, поддержка карт памяти, камера 13 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM)",
    },
    {
        "id": 4,
        "name": "Смартфон Apple iPhone XR 64GB Восстановленный by Breezy, грейд B (белый)",
        "img": "https://content2.onliner.by/catalog/device/header/dbd5dec69b90e7d754041d6c19dc79e5.png",
        "description": "Apple iOS, экран 6.1\" IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, " +
            "память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP67",
    },
    {
        "id": 5,
        "name": "Смартфон Apple iPhone XR 64GB Восстановленный by Breezy, грейд B (белый)",
        "img": "https://content2.onliner.by/catalog/device/header/dbd5dec69b90e7d754041d6c19dc79e5.png",
        "description": "Apple iOS, экран 6.1\" IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, " +
            "память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP67",
    }
]

let htmlTags = "";
data.forEach(phone => {
    htmlTags += `
        <div class="card" style="margin-bottom: 10px; width: 10rem;">
          <img src="${phone.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.name}</h5>
            <p class="card-text">${phone.description}</p>
            <a href="#" class="btn btn-primary">Купить</a>
          </div>
        </div>
    `
})
app.innerHTML = htmlTags;
