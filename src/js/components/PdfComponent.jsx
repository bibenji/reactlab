import React, { Component, Suspense } from 'react';

const PDFPreview = React.lazy(() => import('./PdfGenerator.jsx'));
// import PDFPreview from './PdfGenerator.jsx';

class Pdf extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            showPDFpreview: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleClick() {
        console.log(this.state);
        this.setState({ showPDFpreview: !this.state.showPDFpreview });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        const greeting = `Hello ${this.state.name}`;

        return (
            <div>
                <input
                    placeholder="Enter your name"
                    type="text"
                    onChange={this.handleNameChange}
                />

                {this.state.showPDFpreview && <div>{this.state.name}</div>}

                <button onClick={this.handleClick}>Generate PDF</button>
                {this.state.showPDFpreview && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PDFPreview title={greeting} />
                    </Suspense>                    
                )}
            </div>
        );
    }
}

export default Pdf;