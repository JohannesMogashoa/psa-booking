/**
 * 
 * @param values This will be an object that includes the Step One form fields.
 * @returns An Api JSON response of the student created in the DB.
 */
export const createStudentProfile = async (values: any) => {
    const response = await fetch("/api/student/create", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(values), // body data type must match "Content-Type" header
    }).then(res => res.json()).catch(error => console.error(error));;

    return response
}

/**
 * 
 * @param values This will be an object that includes the Step Two form fields
 * @returns an API JSON response of the application created on the DB.
 */
export const createApplication = async (values: any) => {
    const response = await fetch("/api/application/create", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(values), // body data type must match "Content-Type" header
    }).then(res => res.json()).catch(error => console.error(error));

    return response
}

/**
 * 
 * @param stdNumber The student number a student provided when creating the application
 * @returns an API JSON response of the application associated with the student.
 */
export const getApplication = async (stdNumber: string) => {
    const response = await fetch(`http://localhost:3000/api/application/${stdNumber}`, {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer"
    }).then(res => res.json()).catch(error => console.error(error));


    return response;
}