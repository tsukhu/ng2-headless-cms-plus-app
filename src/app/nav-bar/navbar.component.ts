import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {Observable, Scheduler} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import {AuthService} from '../auth/auth.service';
import {MenuItem} from './menu-item';
import {RouterActive} from '../router-active';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {BlogTypeaheadComponent} from '../blog-typeahead/blog-typeahead.component';

declare var jQuery: any;


@Component({
    selector: 'navbar',
    template: require('./navbar.component.html'),
    directives: [ROUTER_DIRECTIVES, RouterActive, MdButton, MdAnchor, BlogTypeaheadComponent]
})
export class NavBarComponent implements OnInit {
    menuItems: MenuItem[]= [
        new MenuItem('users', 'Users', 'Users', 'fa fa-users')
        /*,
        new MenuItem("posts","Posts","Posts"),
        new MenuItem("phones","Phones","Phones"),
        new MenuItem("git-explorer","GitExplorer","Git User Explorer"),
        new MenuItem("tweets","Tweets","Tweets"),
        new MenuItem("material","Material","Material")    */
    ];
    constructor(private _router: Router,
                public auth: AuthService) {
    }

    ngOnInit() {

    }

    isCurrentRoute(route) {
        let instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

    // collapse Navbar once clicked
    clicked() {
        jQuery('.navbar-collapse.in').collapse('hide');
    }

}
