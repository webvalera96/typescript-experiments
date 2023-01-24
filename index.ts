import { Asset } from '@ironfish/rust-nodejs'

try {
    var a = new Asset("test", "test", "test");
} catch (e) {
    // пидоры
    console.log(e)    
}

console.log("hello")