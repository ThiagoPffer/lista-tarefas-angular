import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash";

@Pipe({
    pure: false,
    name: "orderby"
})
export class OrderByPipe implements PipeTransform {  
    transform = orderBy;
}