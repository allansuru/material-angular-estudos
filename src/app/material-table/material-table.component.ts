import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CommentService } from './../services/comments.service';


@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit, AfterViewInit {
  comments: Comment[] = [];
  displayedColumns = ['id', 'name', 'email', 'body'];
  dataSource: MatTableDataSource<Comment>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private commentService: CommentService) {
       }

  ngOnInit() {

  }



  ngAfterViewInit() {
    this.getPosts();
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
