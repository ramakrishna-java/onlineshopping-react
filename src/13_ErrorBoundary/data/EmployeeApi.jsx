import EmployessData from './EmployessData'

export default class EmployeeApi {
    static getAllEmployees(){
        return EmployessData.employees
    }
}