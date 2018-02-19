import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import {
  MatPaginator,
  MatSort,
  MatTableDataSource,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog
} from '@angular/material';

import { CommentService } from './../services/comments.service';


@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
  comments: Comment[] = [];
  newComment: Comment = {
    postId: '0',
    id: '0',
    name: '',
    email: '',
    body: ''
  };

  displayedColumns = ['id', 'name', 'email', 'body'];
  dataSource: MatTableDataSource<Comment>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private commentService: CommentService,
            public dialog: MatDialog) {
       }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPosts();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogCreateCommentComponent, {
      width: '350px',
      data: {
        name: this.newComment.name,
        email: this.newComment.email,
        body: this.newComment.body
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.createComment(result);
    });
  }

  createComment(result) {

    //console.log('Resultado do dialog: ', result);
    this.newComment.name = result['name'];
    this.newComment.email = result['email'];
    this.newComment.body = result['body'];
    console.log('Comment: ', this.newComment);

    this.comments.splice(0, 0 , this.newComment);

    this.commentService.create(this.newComment.id)
    .subscribe(
    newPost => {
        this.newComment.id = newPost.id;
        console.log(newPost);
    },
    (error: any) => {
        console.log('Erro: ', error);
        this.comments.splice(0, 1);
    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getPosts() {
    this.commentService.getAll()
      .subscribe(
        response => {
          this.comments = response;
          this.dataSource = new MatTableDataSource(this.comments);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }
}


  export interface Comment {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
  }

  @Component({
    selector: 'app-dialog-create-comment',
    templateUrl: 'dialog-create-comment.html',
  })

  export class DialogCreateCommentComponent {

    constructor(
      public dialogRef: MatDialogRef<DialogCreateCommentComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
