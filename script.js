function add()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a+b;
    document.getElementById('ans').value=a+b;
}

function sub()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a-b;
    document.getElementById('ans').value=a-b;
}

function mul()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a*b;
    document.getElementById('ans').value=a*b;
}

function div()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a/b;
    document.getElementById('ans').value=a/b;
}

function mod()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a%b;
    document.getElementById('ans').value=a%b;
}

function sqr()
{
    let a=Number(document.getElementById('i1').value);
    let b=Number(document.getElementById('i2').value);
    let ans=a**b;
    document.getElementById('ans').value=a**b;
}
