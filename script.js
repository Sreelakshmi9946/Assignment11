function validate(event)
{
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let feedback = document.getElementById('feedback')
    
    if(name.trim() == '')
    {
        alert("Name is required!")
        name.focus();
        return false;
    }
    document.form1.submit();
}