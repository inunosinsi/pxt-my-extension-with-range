//% color="#000000" icon="\uf1e6" block="値の範囲付き拡張機能"
namespace myFirstExtension {

    //% block="range %n"
    //% n.min=0 n.max=10 n.step=2 n.defl=4
    export function range(n: number): void {
        basic.showNumber(n)
    }
}
