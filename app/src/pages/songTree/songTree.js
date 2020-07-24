import React, { Component } from 'react';
import './songTree.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SongDisplayBox from '../../components/songDisplayBox/songDisplayBox';
import * as d3 from 'd3';

export default class SongTree extends Component {
    state = {
        root: null,
        width: 700,
        height: 500,
        data: [
            {
                title: 'bass1',
                artist: 'harry',
                img: "https://picsum.photos/100",
                parent: "",
            },
            {
                title: 'drums',
                artist: 'jack',
                img: "https://picsum.photos/100",
                parent: "bass1",
            },
            {
                title: 'guitar',
                artist: 'sean',
                img: "https://picsum.photos/100",
                parent: "bass1",
            },
            {
                title: 'guitar2',
                artist: 'sean',
                img: "https://picsum.photos/100",
                parent: "drums",
            },
        ]
    };

    componentDidMount() {
        const tree = d3.tree().size([this.state.height, this.state.width - 160]);

        const stratify = d3
            .stratify()
            .id(d => {
                return d.title;
            })
            .parentId(d => {
                return d.parent;
            });

        const root = stratify(this.state.data).sort((a, b) => {
            return a.id.localeCompare(b.id);
        });

        this.setState({ root, links: tree(root).links() });
    }

    render() {
        if (!this.state.links) {
            return null;
        }

        return (
            <>
                <Header />
                <svg width={this.state.width + 100} height={this.state.height} className="tree-chart" ref={r => (this.chartRef = r)}>
                    <g transform="translate(100, 0)">
                        {this.renderLinks()}
                        {this.renderNodes()}
                    </g>
                </svg>
                <Footer />
            </>
        );
    }

    renderLinks() {
        return this.state.links.map(function (data, i) {
            const link = d3
                .linkHorizontal()
                .x(d => {
                    return d.x;
                })
                .y(d => {
                    return d.y;
                });
            return <path key={`link${i}`} className="tree-chart-link" d={link(data)} />;
        });
    }

    renderNodes() {
        return this.state.root.descendants().map((d, i) => {
            return (
                <g key={`node${i}`} className="tree-chart-node" transform={`translate(${d.x},${d.y})`}>
                    <rect rx={0} ry={0} opacity={1} stroke={'rgb(3, 192, 220)'} stroke-width={1} stroke-dasharray= {0} stroke-opacity= {1} x={-125} y= {-10} width= {250} height={150}></rect>
                    <text dy={20} x={-8} fill={'white'} textAnchor={d.children ? "start" : "end"}> 
                        {d.data.title} {d.data.artist}
                    </text>
                </g>
            );
        });
    }
}