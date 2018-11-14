export default class StudentService{
    getStudents(){
       return fetch('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/');
    }
    addStudent(studentJson){
        return fetch('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentJson)
        });
    }
    getStudent(no){
        return fetch('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/' + no);
    }
    saveStudent(rollNo,studentJson){
        return fetch('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/' + rollNo, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentJson)
        });
    }
    deleteStudent(rollNo){
        return fetch('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/'+rollNo, {
            method: 'Delete'
        });
    }
}