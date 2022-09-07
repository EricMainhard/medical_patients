export const useLocalStorage = (data, key) => {

    let patientsInStorage = JSON.parse(localStorage.getItem(key));
    let newPatients = [];
    if (patientsInStorage){
        if (patientsInStorage.length > 1){
            newPatients = [...patientsInStorage, data];
        }
        else {
            newPatients = [patientsInStorage, data];
        }
        let newJsonPatients = JSON.stringify(newPatients);
        localStorage.setItem(key, newJsonPatients);
    } else {
        let newJsonPatients = JSON.stringify(data);
        localStorage.setItem(key, newJsonPatients);
    }
}
