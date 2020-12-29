![image-20201229195235448](https://user-images.githubusercontent.com/75194770/103278688-743c3600-4a0f-11eb-8d64-717c8f840285.png)





## Solidity 프로그래밍을 연습해 보기 위해 REMIX IDE를 이용한다.

REMIX의 장점은 솔리디티 프로그래밍을 한 후 바로 사설넷에서 테스트 할수 있는 환경을 모두 갖추고 있다는 점이다.

https://remix.ethereum.org/



![image-20201229195641587](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201229195641587.png)





# Truffle Framework 를 활용한 TEST

nodejs가 설치 되었는 확인 작업

```powershell
node --version
>> v14.15.1
```



각각의 설치 환경에 따라 버전명이 다르지만 버전명이 나온다면 잘 설치되어 있다라고 할 수 있다.

단 , node 8버전은 호환이 되지만 오류가 날 수 있다.



### test project 만들기 위해서 다음과 같이 cmd에 진행한다.

```powershell
cd /
cd apps
mkdir dapp-smaple
cd dapp-sample
code . 
```



truffle framework 를 이용하기 위해서는 truffle을 global영역에 설치한다.

```powershell
npm install -g truffle 
```



설치가 완료되면 다음과 같은 명령어 실행한다.

```powershell
truffle version
>> Truffle v5.1.58 (core: 5.1.58)
>> Solidity v0.5.16 (solc-js)
>> Node v14.15.1
>> Web3.js v1.2.9
```

위와같은 명령어를 통해서 설치를 확인한다.



다음과 같은 명령어를 통해서 dapp-sample 폴더를 truffle framework로 구성한다.

```powershell
C:\apps\dapp-sample> turffle init 

Starting init...
================

> Copying project files to C:\apps\dapp-sample

Init successful, sweet!

```





![image-20201223153312612](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201223153312612.png)

위와 같은 구조의 프로젝트 생성이 된다.

##### cotracts : solidity 언어로 구성되어 있고 , smart-contract를 구현한다.

##### migrations : smart-contract를 block-chain network 인스톨하는 코드를 구현하다.

##### test : 컨트랙트를 잘 구현하였는 테스트 해볼수 있는 부분을 구현한다.

##### truffle-config.js : networks 등의 truffle 환경을 세팅을 이곳에서 한다.



일단 한번 compile 과 migrate를 실행하여 이더리움 기반 블록체인 네트워크에 컨트랙트를 인스톨 해 본다.

```powershell
C:\apps\dapp-sample> truffle develop
Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0x98afd990350f8345910d0fc858153a9d8144c23a
(1) 0x06bae6cc144e25c6849a6af38658a6952f196ac7
(2) 0x31a103e0895691021848b36557de4938e8b2b4d5
(3) 0x97c08f1570c338a5f284c642386abbc1468c48c3
(4) 0xef368abdab2a55827e12cff74892e1ae54ca9fd5
(5) 0xb7856eda068c6daabecdb39041f0c4b06d8ab5f4
(6) 0x2d3405d9a7e0886e9648bf684a031b690ba8c563
(7) 0x37b761afe92e7122d65b34723a97d4162015f2b7
(8) 0xb31ded3c22a03c59ffe2c772f8a72a92f30e4922
(9) 0x9d178de60e5abdfae3526c45da6fe70565d4bea7

Private Keys:
(0) 5a143293a312c4c2d56cea51c2de6ec954b240e9272e9b398de06ea330e7ef68
(1) 7b924f9725833e960c9b281d7e4fdb4beb2b5a42792e0f9438e00cdf4e725319
(2) 07f8b5080415d26c4df212cff7ee6988341f6a398601a343015317ee632616dd
(3) 9e23ecbeb089dc1c86399117cc31b86c835a47ba5dce208711c808e10784c210
(4) e4a7d0f8f74b63c8b26fb59b8bb22f3ee59f6fdaceddb401050752285c4db170
(5) 41c3c9dce79f80ae7c950b5ba44bda1fd04aff700e848198df02873240e5953a
(6) dffacde1df9dbbc5067b5ddddab5d4430557a607c7d8c5c9344fef51c62b61cf
(7) fb1b54847f2bb8a3415a342205c9d1df7753018bdc409dba016296daa29a4a04
(8) 9570883c64678714dbd657c90a022731149a13b4509ec99ef2eeb5ec031ae997
(9) 5bd38e0ac4e1ee5af5642eb4eccb50307dc1560f3f000612d0378e8add307e42

Mnemonic: rapid ivory move tube start amused point spin open frozen deposit frown

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

truffle(develop)>                                                             

```



위와 같은 결과물에서 

127.0.0.1:9545 이곳으로 블록체인 네트워크가 띄워짐

10개의 계정을 자동으로 생성하여 준다.



```powershell
truffle(develop)> compile

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\apps\dapp-sample\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang
```







```powershell
truffle(develop)> migrate


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)

1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xd08d0f9613d168de2864d1781210cffc060e0d6966c8223ca9fabcadfc5bff07
   > Blocks: 0            Seconds: 0
   > contract address:    0x62C6A84589073E19A48EcB3bAcbcB04fE721Ba23
   > block number:        1
   > block timestamp:     1608705744
   > account:             0x98afD990350f8345910d0fC858153a9d8144c23A
   > balance:             99.99616114
   > gas used:            191943 (0x2edc7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00383886 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00383886 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.00383886 ETH
```



compile 과 migrate 과정을 거쳤다는 것은 곧 ! 블록체인 네트워크에 스마트 컨트랙트를 deploy했다는 의미이다.

dapp-sample 프로젝트 안에 build폴더가 생기는 것을 확인할 수 있다.

 그 폴던안데 contracts/Migrations.json 파일에 컨트랙트 함수 등 각종 정보가 기록되어져 있다.

##### 이중에서 abi 와 networks 이 두부분을 이용해서 트랙잭션을 구현할 수 있다.



#### cotracts/HelloWorld.sol 생성하고 다음과 같은 코드를 추가한다.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    string public greeting;

    constructor(string memory _greeting) public {
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function say() view public returns (string memory) {
        return greeting;
    }
}
```





#### migrations/2_deploy_HelloWorld.js 생성하고 다음과 같은 코드를 추가한다.

```javascript
const helloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(helloWorld , "Hello World!");
};
```





다시 블록체인 네트워크에 deploy 하기위해서 전에 진행했던  truffle develop 명령어로 네트워크를 띄우지 않고 

ganache 프로그램이용하여 사설네트워크를 구성한다.

https://www.trufflesuite.com/ganache 에 접속해서 각 피씨 환경에 맞는 인스톨 프로그램으로 설치한다.

다운로드 받은 프로그램을 설치하고 나면 다음과 같은 화면이 나타난다.

![image-20201223162805841](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201223162805841.png)

QUICKSTART 버튼을 누룬다.

![image-20201223162857707](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201223162857707.png)

NETWORDID : 5777

네트워크 주소 : http://127.0.0.1:7545

이와같이 사설 네트워크 생성시킨다.

#### truffle framework활용해서 네트워크에 deploy 하기 위해서 truffle-config.js파일에서 networks를 활성화 시키고 포트를 맞춰둔다.

![image-20201223163132029](C:\Users\82108\AppData\Roaming\Typora\typora-user-images\image-20201223163132029.png)



콘솔창에 다음과 같은 명령어를 실행 시켜 deploy 한다.

```powershell
C:\apps\dapp-sample> truffle compile

C:\apps\dapp-sample> truffle migrate 
```



cmd 콘솔창에서 다음과 같은 명령어를 통해 네트워크에 컨트랙트가 잘 인스톨 되었는지 확인하는 트랜잭션을 수행해 본다.

```powershell
C:\apps\dapp-sample> truffle networks

The following networks are configured to match any network id ('*'):

    development

Closely inspect the deployed networks below, and use `truffle networks --clean` to remove any networks that don't match your configuration. You should not use the wildcard configuration ('*') for staging and production networks for which you intend to deploy your application.

Network: UNKNOWN (id: 5777)
  HelloWorld: 0x14d5E0D4f9231F915B6d0c77D3166dC0679c6539
  Migrations: 0xC0bdbE3F060F0321B8bE4C5a7f78b4Fa4867a9f0

```



콘솔창에 cotract method 실행시켜 보기 위해서 다음과 같은 명령어를 실행한다.

```powershell
C:\apps\dapp-sample> truffle console --network development

truffle(development)> let hello = await HelloWorld.at("0x14d5E0D4f9231F915B6d0c77D3166dC0679c6539")
```



위의 명령어에서 0x14d5E0D4f9231F915B6d0c77D3166dC0679c6539 주소는 build/contracts/HelloWorld.json 파일에

networks['5777'].address 에 나와있는 주소이다.



```powershell
truffle(development)> hello.say()
>> Hello World!
```





이렇게 테스트 하는데는 한계가 있다 , 한꺼번에 테스트 할 수 있는 단위테스트를 진행할 수 있다.

test/test-hello.js 생성하고 다음과 같이 코드를 추가한다.

```javascript
const helloWorld  = artifacts.require("HelloWorld");

contract("HelloWorld", function(accounts){
    before(async function(){
        this.instance = await helloWorld.deployed();
    })

    //단위 테스트 코드
    it("should intialized with contract value", async function(){
        const greeting = await this.instance.greeting();

        assert.equal(greeting , 'Hello World!' , "Wrong invalid value!!");
    })
})
```



cmd 콘솔창에 다음과 같은 명령어를 통해서 단위테스트 진행한다.

```powershell
C:\apps\dapp-sample>truffle test

Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: HelloWorld
    √ should intialized with contract value (102ms)


  1 passing (219ms)

```



오류를 테스트 해보기 위해서  assert.equal(greeting , 'Hello World!' , "Wrong invalid value!!");  부분에서 

Hello World!에서 Hello Kim!로 변형하고 다시 truffle test 진행해 본다.



```powershell
C:\apps\dapp-sample>truffle test

Using network 'development'.


Contract: HelloWorld
    1) should intialized with contract value
    > No events were emitted


  0 passing (174ms)
  1 failing

  1) Contract: HelloWorld
       should intialized with contract value:

      Wrong invalid value!!
      + expected - actual

      -Hello World!
      +Hello Kim!

      at Context.<anonymous> (test\test-hello.js:12:16)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
```



이와같은 오류가 나오고 오류부분을 수정 보완 할 수 있다.



#### 좀더 테스트를 진행하기 위해 

test/test-hello.js에 다음과 같은 코드를 추가한다.



```javascript
const helloWorld  = artifacts.require("HelloWorld");

contract("HelloWorld", function(accounts){
    before(async function(){
        this.instance = await helloWorld.deployed();
    })

    //단위 테스트 코드
    it("should intialized with contract value", async function(){
        const greeting = await this.instance.greeting();

        assert.equal(greeting , 'Hello World!' , "Wrong invalid value!!");
    })
    
    it("should change greeting" , async function(){
        let value = "Hello Kim@@@@"
        await this.instance.setGreeting(value, {from:accounts[0]});
        const greeting = await this.instance.say();

        assert.equal(greeting, value, "does not change the value")
    } )
})
```





```powershell
C:\apps\dapp-sample>truffle test

Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: HelloWorld
    √ should intialized with contract value (85ms)
    √ should change greeting (194ms)


  2 passing (387ms)
```





이와같이 truffle framework를 활용해서 이더리움 기반에 컨트랙트를 구성하고 디플로이하고 단위테스트까지 진행할 수 있다.

test를 진행하는 것은 네트워크 배포하기전에 매우 중요하므로 항상 테스트를 꼭 진행해야만이 실제 서비스에서 오류등을 방지 할 수 있다.

