import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }

    public clearCounter(){
        this.currentCount = 0;
    }

    public IncreaseOne(){
        this.currentCount = this.currentCount + 1;
    }
}
