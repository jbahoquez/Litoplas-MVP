import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IconDefinition, faCoffee, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface UrlParams {
  userID: string
}
// interface User {

//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   id_d?: string;
// }

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

interface IIntranetUsuarios{
  n_ide:           string | null;
  password?:       string;
  mail?:           string | null;
  nombre?:         string | null;
  fecha?:          Date | null;
  usuario?:        string | null;
  estado?:         string | null;
  peticiones?:     string | null;
  incidentes?:     string | null;
  fecha_password?: Date | null;
  fecha_retiro?:   Date | null;
  c_emp?:          string | null;
  bloqueado?:      string | null;
  salt?:           string | null;
  roles_id:        number | null;
  perfiles_id:     number | null;
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
  styleUrls: ['./user-management.component.css'],

})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['n_ide', 'nombre', 'mail', 'c_emp'];
  //dataSource: MatTableDataSource<UserData>;

  dataSource: MatTableDataSource<IIntranetUsuarios>;
  intranetUsuarios: Array<IIntranetUsuarios>;
  users: IIntranetUsuarios[] = [];
  prueba2: IIntranetUsuarios[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService) {
    const Iusers = Array.from({length: 1020}, (_, k) => createNewUser(k + 1));
    //const intranet=Array.from({length:1020},(_,k) => this.getUsersReturn())

    console.log('0')
    this.getUsers()
    console.log('1')
    console.log(this.prueba2)
    console.log('2')


    const prueba: IIntranetUsuarios[]=[

      {
          n_ide :"1001870939",
          mail: "programaproduccion@litoplas.com",
          nombre: "YERILIN LUCERO BACA HERRERA",
          fecha: null,
          usuario: "YEBACA",
          estado: "A",
          peticiones: null,
          incidentes: "S",
          fecha_password: null,
          fecha_retiro: null,
          c_emp: null,
          bloqueado: null,
          roles_id: null,
          perfiles_id: null
      },
      {
          n_ide: "72015716",
          mail: "HRODRI@LITOPLAS.CO",
          nombre: "HUGO RODRIGUEZ  DE LA ASUNCION",
          fecha: null,
          usuario: "HRODRI",
          estado: "A",
          peticiones: null,
          incidentes: "S",
          fecha_password: null,
          fecha_retiro: null,
          c_emp: null,
          bloqueado: null,
          roles_id: null,
          perfiles_id: null
      },


      // {
      //     "n_ide": "72337847",
      //     "mail": null,
      //     "nombre": "PASO ARRIETA JONATHAN ELI",
      //     "fecha": "2012-03-03",
      //     "usuario": "JPASO*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1045685535",
      //     "mail": "jdelacruz@litoplas.co",
      //     "nombre": "JHAIDER CAMILO DE LA CRUZ HERNANDEZ",
      //     "fecha": "2022-01-18",
      //     "usuario": "JDELACR",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "8569775",
      //     "mail": "dpater@litoplas.co",
      //     "nombre": "PATERNINA IBARRA DEIBIS DARIO",
      //     "fecha": "2012-12-09",
      //     "usuario": "DPATER",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1001851656",
      //     "mail": "fpalma@litoplas.com",
      //     "nombre": "FAIMARYS ANDREA PALMA POLANCO",
      //     "fecha": "2022-03-22",
      //     "usuario": null,
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "72247119",
      //     "mail": "hroca@litoplas.co",
      //     "nombre": "HERNANDO ENRIQUE ROCA CARCAMO",
      //     "fecha": "2022-03-22",
      //     "usuario": "HEROCA",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1045729436",
      //     "mail": "ygavalo@litoplas.co",
      //     "nombre": "YANDIS RAFAEL GAVALO BARCELO",
      //     "fecha": "2022-03-22",
      //     "usuario": "YGAVAL",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1001938745",
      //     "mail": "pcolon@llitoplas.co",
      //     "nombre": "PEDRO DANIEL COLON ROJAS",
      //     "fecha": "2022-05-11",
      //     "usuario": null,
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "7952873",
      //     "mail": "pjalab@litoplas.co",
      //     "nombre": "PEDRO JALABE PENA",
      //     "fecha": "2016-06-16",
      //     "usuario": "PJALAB",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1042466969",
      //     "mail": null,
      //     "nombre": "ALEJANDRO JOSE JIMENEZ DIAZ",
      //     "fecha": "2022-06-15",
      //     "usuario": "*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1129523239",
      //     "mail": null,
      //     "nombre": "DE LA HOZ RINCON DEYVIS JESUS",
      //     "fecha": "2012-06-16",
      //     "usuario": "DEDELAH*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "72336977",
      //     "mail": null,
      //     "nombre": "JOSE GREGORIO MARTINEZ GUZMAN",
      //     "fecha": "2022-06-16",
      //     "usuario": "*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1045740365",
      //     "mail": "acompras@litoplas.com",
      //     "nombre": "HEIDY PIEDAD HERNANDEZ MEZA",
      //     "fecha": "2022-06-21",
      //     "usuario": null,
      //     "estado": null,
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1234567",
      //     "mail": null,
      //     "nombre": "prueba3",
      //     "fecha": "2022-06-28",
      //     "usuario": "p3****",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1048279384",
      //     "mail": "ealvarez@litoplas.co",
      //     "nombre": "ELVIS YESID ALVAREZ CASTRO",
      //     "fecha": "2022-09-29",
      //     "usuario": null,
      //     "estado": null,
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1007071222",
      //     "mail": null,
      //     "nombre": "NAYELIS ANDREA DE LA ROSA CARO",
      //     "fecha": "2022-11-01",
      //     "usuario": null,
      //     "estado": null,
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "32728558",
      //     "mail": "ynavar@litoplas.com",
      //     "nombre": "YANET NAVARRO",
      //     "fecha": "2014-10-02",
      //     "usuario": "YNAVAR",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1143124760",
      //     "mail": null,
      //     "nombre": "MEJIA FONTALVO JAVIER ALFONSO",
      //     "fecha": "2012-03-28",
      //     "usuario": "JMEJIA*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "72021655",
      //     "mail": "wcanti@litoplas.co",
      //     "nombre": "CANTILLO CAHUANA WUILMAN JOSE",
      //     "fecha": "2011-07-11",
      //     "usuario": "WCANTI",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1143117372",
      //     "mail": "jarrie@litoplas.co",
      //     "nombre": "ARRIETA HERRERA JULIO ENRIQUE",
      //     "fecha": "2016-08-29",
      //     "usuario": "JARRIE",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1129543019",
      //     "mail": null,
      //     "nombre": "ARAGON TOBIAS EIVER DAVID",
      //     "fecha": "2012-02-14",
      //     "usuario": "EARAGON",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1045688079",
      //     "mail": "sguard@litoplas.co",
      //     "nombre": "GUARDIA BALDOVINO STEVEN",
      //     "fecha": "2014-04-29",
      //     "usuario": "SGUARD",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "22465417",
      //     "mail": null,
      //     "nombre": "GOMEZ MU?OZ ROSA MARIA",
      //     "fecha": "2011-12-13",
      //     "usuario": "MGOMEZ",
      //     "estado": "A",
      //     "peticiones": null,
      //     "incidentes": "S",
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "1129537316",
      //     "mail": null,
      //     "nombre": "DE LA HOZ BARON JEHIDER EDUARDO",
      //     "fecha": "2011-11-18",
      //     "usuario": "JDELAH*",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // },
      // {
      //     "n_ide": "72006371",
      //     "mail": null,
      //     "nombre": "CARLOS MARIO BORRE ESCORCIA",
      //     "fecha": "2014-11-26",
      //     "usuario": "CBORRE**",
      //     "estado": "I",
      //     "peticiones": null,
      //     "incidentes": null,
      //     "fecha_password": null,
      //     "fecha_retiro": null,
      //     "c_emp": null,
      //     "bloqueado": null,
      //     "roles_id": null,
      //     "perfiles_id": null
      // }

  ]

  console.log(prueba)
  //this.dataSource = new MatTableDataSource(this.prueba2);
    console.log('constructor')

  }


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
      { description: 'Nombre de usuario', field: 'nombre' },
      { description: 'Phone', field: 'n_ide' },
      { description: 'Correo Electronico', field: 'mail' },
      { description: 'Role', field: 'c_emp' },
      { description: 'Acciones', field: 'actions' }
    ],
    dataColumns: []
  }
  //dataSource = new MatTableDataSource(this.tableData.dataColumns);
  // displayedColumns: string[] = ['n_ide', 'nombre', 'mail', 'c_emp'];
  // dataSource:any;




  // ngAfterViewInit() {
  //   console.log('paginator')
  //   //this.dataSource = new MatTableDataSource();
  //   console.log(`Datos desde ngAfterViewInit ${this.dataSource}`)
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  //   console.log(this.paginator)
  //   console.log(this.dataSource.paginator)
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //dataSource = new MatTableDataSource(this.intranetUsuarios);
  queryParams: any

  get name() {
    return this.formUser.get('name')
  }

  formUser = this.fb.group({
    "name": ['', Validators.required],
    "email": ['', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    "phone": ['', [Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
    "role": ['', Validators.required],
    "n_ide": ['']
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
    console.log('-1')
    this.route.params.subscribe(params =>
      this.urlParams.userID = params['userID']
    )
    this.route.queryParams.subscribe(params => this.queryParams = { ...params });

    //this.tableData.dataColumns= this.userService.getUsers()
    console.log('query params', this.queryParams);
    console.log('getuser desde oninit')
    this.getUsers()
    // console.log('prueba2')
    // console.log(this.prueba2)
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users
    //   this.prueba2=users
    //   this.setDataTable();
    //   //this.dataSource = new MatTableDataSource(this.intranetUsuarios);
    //   //this.dataSource = new MatTableDataSource(this.intranetUsuarios);
    //   console.log(users)
    //   console.log(this.intranetUsuarios)
    //   console.log(this.dataSource.data)
    // })
    // console.log(this.users)
    // this.prueba2=this.users
    // console.log('prueba2')
    // console.log(this.prueba2)

  }

  setDataTable(): void {
    this.tableData = { ...this.tableData, dataColumns: this.users }
    //this.dataSource = new MatTableDataSource(this.users);
    console.log('set')
    console.log(this.prueba2)
    this.intranetUsuarios=this.users
    this.userService.setTotalUsers(this.users.length)
    this.dataSource = new MatTableDataSource(this.prueba2);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getFormControl(controlName: string) {
    return this.formUser.get(controlName)
  }



  processData() {

    //console.log(this.formUser.value)
    const tempUser: IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
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
    console.log('inicio get')
    this.userService.getUsers().subscribe(users => {
      this.users = users
      this.prueba2=users
      this.setDataTable();
      //this.dataSource = new MatTableDataSource(this.intranetUsuarios);
      //this.dataSource = new MatTableDataSource(this.intranetUsuarios);
      console.log(users)
      console.log(this.intranetUsuarios)
      console.log(this.dataSource.data)
    })
  }





  proccessUser(){
    console.log('Click')
    const user=this.formUser.value;
    if(!user.n_ide) this.addUser()
    //if (user.id_d) this.updateUser()

  }
  addUser(): void {
    const tempUser: IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
      this.userService.addNewUser(tempUser).subscribe(user => {
        this.users.push(user)
        this.setDataTable()

        //this.getUsers()
      })
    // // const id = this.formUser.value.id_d;
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



  deleteUser(user: IIntranetUsuarios) {
    this.userService.deleteUsers(user.n_ide!).subscribe(resp => {

    })

  }

  // updateUser() {
  //   console.log('Uodate')
  //   const {n_ide,mail,nombre, usuario,c_emp}:IIntranetUsuarios = JSON.parse(JSON.stringify(this.formUser.value))
  //   this.userService.updateUsers({nombre,mail,usuario,c_emp},n_ide!).subscribe((user: any) => {
  //     const userIndex=this.users.findIndex(u=>user.n_ide===u.n_ide)
  //     this.users[userIndex]={...user}
  //     this.setDataTable()
  //     //this.formUser.reset()
  //   })
  // }

  onDeleteTable(item: IIntranetUsuarios) {
    // console.log(item, 'delete on user management')

    // this.deleteUser(item)
    // this.getUsers()

    this.userService.deleteUsers(item.n_ide!).subscribe(user => {
      const userTemp: IIntranetUsuarios[] = this.users.filter(user => user.n_ide !== item.n_ide)
      this.users = [...userTemp]
      this.setDataTable()
    })
  }

  // onUpdateTable(item: IIntranetUsuarios) {

  //   console.log(item)
  //   this.formUser.setValue({
  //     name: item.nombre,
  //     email: item.mail,
  //     phone: item.phone,
  //     role:item.role,
  //     id_d: item.id_d!
  //   })
  //   // this.userService.updateUsers(item).subscribe(resp =>{
  //   //   const userTemp: User[] = this.users.filter(user => user._id !== item._id)
  //   //   this.users=[...userTemp, item]
  //   //   this.setDataTable()
  //   // })
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };


}
