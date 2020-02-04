import { Component, OnInit } from '@angular/core';
import { LogDetailService } from 'src/app/shared/log-detail.service';
import { format } from 'url';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styles: []
})
export class LogDetailComponent implements OnInit {

  constructor(private service: LogDetailService, private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      idLog: 0,
      description: '',
      dateRegister: '',
    };
  }

  onSubmit(form: NgForm) {
    this.service.postLogDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted succefully', 'Log detail register');
      },
      err => { console.log(err); }
    );
  }
}
