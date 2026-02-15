"use strict";
(self["webpackChunkmoebytes_site"] = self["webpackChunkmoebytes_site"] || []).push([["489"], {
2768(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DsfParser: () => (/* binding */ DsfParser),
  DsdContentParseError: () => (/* binding */ DsdContentParseError)
});

// EXTERNAL MODULE: ./node_modules/debug/src/browser.js
var browser = __webpack_require__(7833);
// EXTERNAL MODULE: ./node_modules/music-metadata/lib/id3v2/AbstractID3Parser.js
var AbstractID3Parser = __webpack_require__(4481);
// EXTERNAL MODULE: ./node_modules/token-types/lib/index.js
var lib = __webpack_require__(4017);
// EXTERNAL MODULE: ./node_modules/music-metadata/lib/common/FourCC.js
var FourCC = __webpack_require__(5031);
;// CONCATENATED MODULE: ./node_modules/music-metadata/lib/dsf/DsfChunk.js


/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
const ChunkHeader = {
    len: 12,
    get: (buf, off) => {
        return { id: FourCC/* .FourCcToken.get */.e.get(buf, off), size: lib.UINT64_LE.get(buf, off + 4) };
    }
};
/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
const DsdChunk = {
    len: 16,
    get: (buf, off) => {
        return {
            fileSize: lib.INT64_LE.get(buf, off),
            metadataPointer: lib.INT64_LE.get(buf, off + 8)
        };
    }
};
const ChannelType = (/* unused pure expression or super */ null && ({
    mono: 1,
    stereo: 2,
    channels: 3,
    quad: 4,
    '4 channels': 5,
    '5 channels': 6,
    '5.1 channels': 7
}));
/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
const FormatChunk = {
    len: 40,
    get: (buf, off) => {
        return {
            formatVersion: lib.INT32_LE.get(buf, off),
            formatID: lib.INT32_LE.get(buf, off + 4),
            channelType: lib.INT32_LE.get(buf, off + 8),
            channelNum: lib.INT32_LE.get(buf, off + 12),
            samplingFrequency: lib.INT32_LE.get(buf, off + 16),
            bitsPerSample: lib.INT32_LE.get(buf, off + 20),
            sampleCount: lib.INT64_LE.get(buf, off + 24),
            blockSizePerChannel: lib.INT32_LE.get(buf, off + 32)
        };
    }
};

// EXTERNAL MODULE: ./node_modules/music-metadata/lib/id3v2/ID3v2Parser.js + 3 modules
var ID3v2Parser = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/music-metadata/lib/ParseError.js
var ParseError = __webpack_require__(3324);
;// CONCATENATED MODULE: ./node_modules/music-metadata/lib/dsf/DsfParser.js





const debug = browser('music-metadata:parser:DSF');
class DsdContentParseError extends (0,ParseError/* .makeUnexpectedFileContentError */.fO)('DSD') {
}
/**
 * DSF (dsd stream file) File Parser
 * Ref: https://dsd-guide.com/sites/default/files/white-papers/DSFFileFormatSpec_E.pdf
 */
class DsfParser extends AbstractID3Parser/* .AbstractID3Parser */.k {
    async postId3v2Parse() {
        const p0 = this.tokenizer.position; // mark start position, normally 0
        const chunkHeader = await this.tokenizer.readToken(ChunkHeader);
        if (chunkHeader.id !== 'DSD ')
            throw new DsdContentParseError('Invalid chunk signature');
        this.metadata.setFormat('container', 'DSF');
        this.metadata.setFormat('lossless', true);
        this.metadata.setAudioOnly();
        const dsdChunk = await this.tokenizer.readToken(DsdChunk);
        if (dsdChunk.metadataPointer === BigInt(0)) {
            debug("No ID3v2 tag present");
        }
        else {
            debug(`expect ID3v2 at offset=${dsdChunk.metadataPointer}`);
            await this.parseChunks(dsdChunk.fileSize - chunkHeader.size);
            // Jump to ID3 header
            await this.tokenizer.ignore(Number(dsdChunk.metadataPointer) - this.tokenizer.position - p0);
            return new ID3v2Parser/* .ID3v2Parser */.S().parse(this.metadata, this.tokenizer, this.options);
        }
    }
    async parseChunks(bytesRemaining) {
        while (bytesRemaining >= ChunkHeader.len) {
            const chunkHeader = await this.tokenizer.readToken(ChunkHeader);
            debug(`Parsing chunk name=${chunkHeader.id} size=${chunkHeader.size}`);
            switch (chunkHeader.id) {
                case 'fmt ': {
                    const formatChunk = await this.tokenizer.readToken(FormatChunk);
                    this.metadata.setFormat('numberOfChannels', formatChunk.channelNum);
                    this.metadata.setFormat('sampleRate', formatChunk.samplingFrequency);
                    this.metadata.setFormat('bitsPerSample', formatChunk.bitsPerSample);
                    this.metadata.setFormat('numberOfSamples', formatChunk.sampleCount);
                    this.metadata.setFormat('duration', Number(formatChunk.sampleCount) / formatChunk.samplingFrequency);
                    const bitrate = formatChunk.bitsPerSample * formatChunk.samplingFrequency * formatChunk.channelNum;
                    this.metadata.setFormat('bitrate', bitrate);
                    return; // We got what we want, stop further processing of chunks
                }
                default:
                    this.tokenizer.ignore(Number(chunkHeader.size) - ChunkHeader.len);
                    break;
            }
            bytesRemaining -= chunkHeader.size;
        }
    }
}


},
4481(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  k: () => (AbstractID3Parser)
});
/* import */ var strtok3__rspack_import_0 = __webpack_require__(7862);
/* import */ var debug__rspack_import_1 = __webpack_require__(7833);
/* import */ var _ID3v2Token_js__rspack_import_4 = __webpack_require__(7675);
/* import */ var _ID3v2Parser_js__rspack_import_3 = __webpack_require__(2729);
/* import */ var _id3v1_ID3v1Parser_js__rspack_import_5 = __webpack_require__(8191);
/* import */ var _common_BasicParser_js__rspack_import_2 = __webpack_require__(4604);






const debug = debug__rspack_import_1('music-metadata:parser:ID3');
/**
 * Abstract parser which tries take ID3v2 and ID3v1 headers.
 */
class AbstractID3Parser extends _common_BasicParser_js__rspack_import_2/* .BasicParser */.s {
    constructor() {
        super(...arguments);
        this.id3parser = new _ID3v2Parser_js__rspack_import_3/* .ID3v2Parser */.S();
    }
    static async startsWithID3v2Header(tokenizer) {
        return (await tokenizer.peekToken(_ID3v2Token_js__rspack_import_4/* .ID3v2Header */.yW)).fileIdentifier === 'ID3';
    }
    async parse() {
        try {
            await this.parseID3v2();
        }
        catch (err) {
            if (err instanceof strtok3__rspack_import_0/* .EndOfStreamError */.d1) {
                debug("End-of-stream");
            }
            else {
                throw err;
            }
        }
    }
    finalize() {
        return;
    }
    async parseID3v2() {
        await this.tryReadId3v2Headers();
        debug('End of ID3v2 header, go to MPEG-parser: pos=%s', this.tokenizer.position);
        await this.postId3v2Parse();
        if (this.options.skipPostHeaders && this.metadata.hasAny()) {
            this.finalize();
        }
        else {
            const id3v1parser = new _id3v1_ID3v1Parser_js__rspack_import_5/* .ID3v1Parser */.Bn(this.metadata, this.tokenizer, this.options);
            await id3v1parser.parse();
            this.finalize();
        }
    }
    async tryReadId3v2Headers() {
        const id3Header = await this.tokenizer.peekToken(_ID3v2Token_js__rspack_import_4/* .ID3v2Header */.yW);
        if (id3Header.fileIdentifier === 'ID3') {
            debug('Found ID3v2 header, pos=%s', this.tokenizer.position);
            await this.id3parser.parse(this.metadata, this.tokenizer, this.options);
            return this.tryReadId3v2Headers();
        }
    }
}


},

}]);