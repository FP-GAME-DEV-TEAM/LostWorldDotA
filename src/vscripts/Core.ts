//================================
// 顶层工具类
//================================


// 数组乱序
export function ArrayShuffle<T> (lt: Array<T>) : Array<T>{
    if(lt == undefined || lt.length == 0) return lt;

    for(let i=lt.length-1; i>=1; i--){
        const j = RandomInt(0, i);
        const t = lt[i];
        lt[i] = lt[j];
        lt[j] = t;
    }

    return lt;
}

// 格式化输出table，仅输出深度为1的属性
export function PrintTable(kv: any, key="", inner: (a : any) => string = ()=>""){
    if(!kv){
        print("nil");
        return;
    }
    print(key+"{");
    for(let k in kv){
        print("\t"+k + ":" + kv[k] + "\t" + inner(kv[k]));
    }
    print("}");
}