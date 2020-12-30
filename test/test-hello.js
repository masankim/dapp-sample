const helloWorld = artifacts.require('HelloWorld')

contract('HellWorld', function(accounts){

    before(async function(){
        this.instance = await helloWorld.deployed()

    })

    it("should intialized with contract value" , async function(){
        const greeting = await this.instance.greeting();

        assert.equal(greeting , "Hello KIM!" , "Wrong invaild value !")
    })

    it("should change greeting" , async function(){
        let value = "Hello Kim@@@@"
        await this.instance.setGreeting(value, {from:accounts[0]});
        const greeting = await this.instance.say();

        assert.equal(greeting, value, "does not change the value")
    } )

})
    