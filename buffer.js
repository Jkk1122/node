// Buffer是一个类似于数组的对象 ，用于表示固定长度的字节序列；Buffer本质是一段内存空间，专门用来处理二进制数据
// 1.Buffer.alloc
// 创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_0 = Buffer.alloc(10)
console.log(buf_0);
// 2.Buffer.allocUnsafe
// 创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
let buf_1 =Buffer.allocUnsafe(10)
console.log(buf_1);

// 3.Buffer.from
// 通过字符串创建Buffer
let buf_2 = Buffer.from('jia')
console.log(buf_2);
// 通过数组创建Buffer
let buf_3 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_3);

// Buffer字符串的转化
// toString()默认utf-8规则
let buf_4 = Buffer.from('zhangziyi')
console.log(buf_4.toString());

// Buffer的读写
// Buffer可以直接通过[]方式对数据进行处理
console.log(buf_3[1]);
//修改
buf_3[2] = 97
// 查看结果
console.log(buf_3.toString());
// 修改一个大于255的数
console.log(buf_3);
buf_3[0] = 288    //二进制0001 0010 0000
// 查看buffer数据
console.log(buf_3); //<Buffer 20 6c 61 76 65 79 6f 75>    20的二进制为  0010 0000  
// 由上述可以得出 当超出255时会舍弃超出一个字节的部分
// utf-8的字符占3个字节

