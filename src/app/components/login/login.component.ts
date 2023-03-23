import { Component, OnInit, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  showPassword = false;
  activeForm = 0;
  
  ngOnInit(): void {}
  onLogin(): void {
    console.log('Email: ', this.email);
    console.log('Password: ', this.password);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validate(): void{
    
      const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation')
  
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          console.log("comnpletito y se envia:", event)
          form.classList.add('was-validated')
        }, false)
      })
    
  }

  /* constructor(private elementRef: ElementRef) { } */

 /*  ngAfterViewInit() {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('.needs-validation');
    ###funcion de franco let res = grecaptcha.getResponse(); 

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity() ###funcion de franco && res.length == 0 ) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  } */

  google() {
    var myWindow = window.open("https://accounts.google.com/signin/v2/identifier?hl=es&flowName=GlifWebSignIn&flowEntry=ServiceLogin", "Cargando...", "width=360,height=450,left=600px,top=400px");
  }

  changeForm(index: number) {
    this.activeForm = index;
  }

}
