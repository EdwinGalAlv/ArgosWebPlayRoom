using MudBlazor;
using Microsoft.AspNetCore.Components;

namespace ArgosWebPlayRoom.Components
{
    public class CustomDataGrid<T> : MudDataGrid<T>
    {
        [Parameter]
        public T SelectedRow { get; set; }

        [Parameter]
        public EventCallback<T> SelectedRowChanged { get; set; }
    }
}
