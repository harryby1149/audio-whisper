import React, { Component, createRef } from 'react';
import './sineWave.css';

class SineWave extends Component {
    constructor(props) {
        super(props);
        this.svgElem = createRef();
        this.state = {
            numberOfLines: 100,
            lineDataArr: [],
            pathEl: document.createElementNS('http://www.w3.org/2000/svg', 'path'),
            }
    }

    randomRange = (min, max) => {
        return ~~(Math.random() * (max - min + 1)) + min
    }

    createPathString = () => {
        let completedPath = '',
            comma = ',',
            ampl = 10; // pixel range from 0, aka how deeply they bend

        for (let i = 0; i < this.state.numberOfLines; i++) {

            let path = this.state.lineDataArr[i];

            let current = {
                x: ampl * Math.sin(path.counter / path.sin),
                y: ampl * Math.cos(path.counter / path.cos)
            };

            let newPathSection = 'M' +
                // starting point
                path.startX +
                comma +
                path.startY +
                // quadratic control point
                ' Q' +
                path.pointX +
                comma +
                (current.y * 1.5).toFixed(2) + // 1.5 to amp up the bend a little
                // center point intersection
                ' ' +
                ((current.x) / 2 + path.centerX).toFixed(2) +
                comma +
                ((current.y) / 2 + path.centerY).toFixed(2) +
                // end point with quadratic reflection (T) (so the bottom right mirrors the top left)
                ' T' +
                path.endX +
                comma +
                path.endY;
            path.counter++;
            completedPath += newPathSection;

        };
        return completedPath;
    }

     animLoop = () => {
        this.state.pathEl.setAttribute('d', this.createPathString());
        requestAnimationFrame(this.animLoop);
    }

    createLines = () => {
        let svgEl = this.svgElem.current;
                // higher is slower
        let minSpeed = 85;
        let maxSpeed = 150;
            // create an arr which contains objects for all lines
            // createPathString() will use this array
            for (let i = 0; i < this.state.numberOfLines; i++) {

                let lineDataObj = {
                    counter: this.randomRange(1, 500), // a broad counter range ensures lines start at different cycles (will look more random)
                    // startX: this.randomRange(-5, -40),
                    // startY: this.randomRange(-5, -30),
                    startX: -10,
                    startY: 50,
                    // endX: this.randomRange(200, 220), // viewbox = 200
                    // endY: this.randomRange(120, 140), // viewbox = 120
                    endX: 210,
                    endY: 50,
                    sin: this.randomRange(minSpeed, maxSpeed),
                    cos: this.randomRange(minSpeed, maxSpeed),
                    //sin: 120,
                    //cos: 85,
                    // pointX: this.randomRange(30, 55),
                    // centerX: this.randomRange(90, 120),
                    // centerY: this.randomRange(60, 70)
                    pointX: 40,
                    centerX: 100,
                    centerY: 60
                }
                this.state.lineDataArr.push(lineDataObj)
            }

            // once the path elements are created, start the animation loop
            svgEl.append(this.state.pathEl);
            this.animLoop();
    }


    componentDidMount() {
        this.createLines();
    }

    render() {
        return (
            <div>
                <svg className="animated-lines" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 200 120" ref={this.svgElem} />
            </div>
        );
    };
};

export default SineWave;