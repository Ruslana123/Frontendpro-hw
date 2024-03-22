const year = +prompt("Введить рік народження");
const town = prompt("Введіть місто, в якому Ви живете").toLowerCase();
const sport = prompt("Який Ваш улюблений вид спорту").toLowerCase();

if(!year || !town || !sport) {
    let errorMessage = "Жаль, що ви не захотіли ввести свої дані:";
    if (!year) errorMessage += " рік народження";
    if (!town) errorMessage += " місто";
    if (!sport) errorMessage += " вид спорту";
    alert(errorMessage);
} else {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    switch (town) {
        case "київ":
            alert(`Вам ${age} років, Ви живете у столиці України`);
            break
        case "вашингтон":
            alert(`Вам ${age} років, Ви живете у столиці США`);
            break
        case "лондон":
            alert(`Вам ${age} років, Ви живете у столиці Великобританії`);
            break
        default:
            alert(`Вам ${age} років, Ви живете у місті ${town}`);

    }
    const sportsChampions = {
        "футбол": "Роналду",
        "баскетбол": "Леброн Джеймс",
        "теніс": "Рафаэль Надаль"
    };

    if (sport in sportsChampions) {
        alert(`Круто! Хочеш стати ${sportsChampions[sport]}`);
    }
}


