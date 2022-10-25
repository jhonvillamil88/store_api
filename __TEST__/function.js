
const expect    = require("chai").expect;
const functions = require("../util/functions");

describe("Check getSortParams Function: ", function() {
    it("should return {nombre:'ASC'}", function() {
        result   = functions.getSortParams({
            query:{
                order:"nombre"
            }
        });
        expect(result).to.deep.equal({
            nombre:'ASC'
        });
    });
    it("should return {nombre:'DESC'}", function() {
        result   = functions.getSortParams({
            query:{
                order:"-nombre"
            }
        });
        expect(result).to.deep.equal({
            nombre:'DESC'
        });
    });
    it("should return {nombre:'ASC'}", function() {
        result   = functions.getSortParams({
            query:{
            }
        });
        expect(result).to.deep.equal({
            nombre:'ASC'
        });
    });

});


describe("Check getPage Function: ", function() {
    it("should return {skip:0,take:50}", function() {
        result   = functions.getPage({
            query:{
                page:1
            }
        });
        expect(result).to.deep.equal({
            skip:0,
            take:50
        });
    });
    it("should return {skip:0,take:50}", function() {
        result   = functions.getPage({
            query:{

            }
        });
        expect(result).to.deep.equal({
            skip:0,
            take:50
        });
    });

    it("should return {skip:50,take:50}", function() {
        result   = functions.getPage({
            query:{
                page:2
            }
        });
        expect(result).to.deep.equal({
            skip:50,
            take:50
        });
    });

    it("should return {skip:100,take:50}", function() {
        result   = functions.getPage({
            query:{
                page:3
            }
        });
        expect(result).to.deep.equal({
            skip:100,
            take:50
        });
    });

});

