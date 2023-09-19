import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IconDefinition, faCoffee, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';

interface UrlParams {
  userID: string
}
interface User {

  name: string;
  email: string;
  phone: string;
  role: string;
  id_d?: string;
}

interface TableData {
  headers: DataKeys[];
  dataColumns: any[];
}
//Cabeceras
interface DataKeys {
  description: string;
  field: string;
}


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService) { }


  urlParams: UrlParams = {
    userID: ''
  }




  // users:User={
  //   name:'',
  //   email:'',
  //   telefono:0,
  //   password:''
  // }
  // usersData: User[]=[]


  tableData: TableData = {
    headers: [
      { description: 'Nombre de usuario', field: 'name' },
      { description: 'Phone', field: 'phone' },
      { description: 'Correo Electronico', field: 'email' },
      { description: 'Role', field: 'role' },
      { description: 'Acciones', field: 'actions' }
    ],
    dataColumns: []
  }
  queryParams: any

  get name() {
    return this.formUser.get('name')
  }

  formUser = this.fb.group({
    "name": ['', Validators.required],
    "email": ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    "phone": ['', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    "role": ['', Validators.required],
    "id_d": ['']
    //,
    // "workInformation" : this.fb.group({
    //   "companyPosition":['',Validators.required]
    // })
  })

  // formUser: FormGroup = new FormGroup({
  //   "name" : new FormControl('', Validators.required),
  //   "email" : new FormControl('', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]),
  //   "telefono" : new FormControl('', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]),
  //   "password" : new FormControl('', Validators.required)
  // })




  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.urlParams.userID = params['userID']
    )
    this.route.queryParams.subscribe(params => this.queryParams = { ...params });

    //this.tableData.dataColumns= this.userService.getUsers()
    console.log('query params', this.queryParams);
    this.getUsers()
  }

  setDataTable(): void {
    this.tableData = { ...this.tableData, dataColumns: this.users }
    this.userService.setTotalUsers(this.users.length)
  }

  getFormControl(controlName: string) {
    return this.formUser.get(controlName)
  }



  processData() {

    //console.log(this.formUser.value)
    const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
    //this.userService.saveUser(tempUser)
    //console.log(this.formUser.valid)
    //this.usersData.push(tempUser)
    //this.addUser()
    this.formUser.reset()
    //console.log(this.userService.userData)
    //this.tableData.dataColumns= this.userService.userData
    //this.tableData={...this.tableData, dataColumns: this.userService.userData}
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
      this.setDataTable();
    })
  }

  proccessUser(){
    console.log('Click')
    const user=this.formUser.value;
    if(!user.id_d) this.addUser()
    if (user.id_d) this.updateUser()

  }
  addUser(): void {
    const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
      this.userService.addNewUser(tempUser).subscribe(user => {
        this.users.push(user)
        this.setDataTable()

        //this.getUsers()
      })
    // const id = this.formUser.value.id_d;
    // if (id) {
    //   const userTemp = JSON.parse(JSON.stringify(this.formUser.value))
    //   this.updateUser(userTemp);
    //   console.log('Actualizando usuario')
    // } else {
    //   const tempUser: User = JSON.parse(JSON.stringify(this.formUser.value))
    //   this.userService.addNewUser(tempUser).subscribe(user => {
    //     this.users.push(user)
    //     this.setDataTable()

    //     //this.getUsers()
    //   })
    //   console.log('Creando usuario')
    // }
  }



  deleteUser(user: User) {
    this.userService.deleteUsers(user.id_d!).subscribe(resp => {

    })

  }

  updateUser() {
    console.log('Uodate')
    const {id_d,name,email,role,phone}:User = JSON.parse(JSON.stringify(this.formUser.value))
    this.userService.updateUsers({name,email,role,phone},id_d!).subscribe((user: any) => {
      const userIndex=this.users.findIndex(u=>user.id_d===u.id_d)
      this.users[userIndex]={...user}
      this.setDataTable()
      //this.formUser.reset()
    })
  }

  onDeleteTable(item: User) {
    // console.log(item, 'delete on user management')

    // this.deleteUser(item)
    // this.getUsers()

    this.userService.deleteUsers(item.id_d!).subscribe(user => {
      const userTemp: User[] = this.users.filter(user => user.id_d !== item.id_d)
      this.users = [...userTemp]
      this.setDataTable()
    })
  }

  onUpdateTable(item: User) {

    console.log(item)
    this.formUser.setValue({
      name: item.name,
      email: item.email,
      phone: item.phone,
      role:item.role,
      id_d: item.id_d!
    })
    // this.userService.updateUsers(item).subscribe(resp =>{
    //   const userTemp: User[] = this.users.filter(user => user._id !== item._id)
    //   this.users=[...userTemp, item]
    //   this.setDataTable()
    // })
  }

}
