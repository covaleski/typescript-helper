class FileFactory
{
    /**
     * File lines.
     * 
     * @var {string[]}
     */
    lines = [];

    /**
     * Open and close brackets.
     * 
     * @param {?string} placeholder
     * @returns {this}
     */
    brackets(content = null)
    {
        this.line('{');
        if (content !== null) {
            this.line('    ' + content);
        }
        return this.line('}').line('');
    }

    /**
     * Create the factory instance.
     * 
     * @param {string} className
     * @returns {this}
     */
    class(className)
    {
        return this.line('class ' + className).brackets('//');
    }

    /**
     * Add an export line.
     * 
     * @param {string} symbol
     * @param {boolean} exportDefault
     * @returns {this}
     */
    export(symbol, exportDefault = false)
    {
        const directive = exportDefault ? 'export default' : 'export';
        return this.line(directive + ' ' + symbol + ';').line('');
    }

    /**
     * Get the file contents.
     * 
     * @returns {string}
     */
    get()
    {
        return this.lines.join('\n');
    }

    /**
     * Add a line to the file.
     * 
     * @param {string} contents
     * @returns {this}
     */
    line(contents = '')
    {
        this.lines.push(contents);
        return this;
    }

    /**
     * Add a namespace to the file.
     * 
     * @param {string} namespace
     * @returns {this}
     */
    namespace(namespace)
    {
        return this.line('namespace ' + namespace).brackets('//');
    }
}

export default FileFactory;