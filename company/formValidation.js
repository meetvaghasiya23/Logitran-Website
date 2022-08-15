function formValidation()
{
    var vehicleNo = document.vehicleForm.vehicleNo;
    var vehicleType = document.vehicleForm.vehicleType;
    var capacity = document.vehicleForm.capacity;

    if(vehicleNo.value.length<=0)
    {
        alert('Vehicle Number is required.');
        vehicleNo.focus();
        return false;
    }

    if(vehicleType.value.length<=0)
    {
        alert('Vehicle Type is required.');
        vehicleType.focus();
        return false;
    }

    if(capacity.value.length<=0)
    {
        alert('Vehicle Capacity is required.');
        capacity.focus();
        return false;
    }


}