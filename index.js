window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const addTask = document.querySelector("#new-task-input");
    const lists = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log('running');
        const task = addTask.value;

        const task_added = document.createElement('div');
        task_added.classList.add('task');

        const task_added_content = document.createElement('div');
        task_added_content.classList.add('content');

        task_added.appendChild(task_added_content);

        const task_added_content_input = document.createElement('input');
        task_added_content_input.classList.add('text');
        task_added_content_input.type = 'text';
        task_added_content_input.value = task;
        task_added_content_input.setAttribute('readonly', 'readonly');

        task_added_content.appendChild(task_added_content_input);

        const task_added_actions = document.createElement('div');
        task_added_actions.classList.add('actions');

        const task_added_actions_edit = document.createElement('button');
        task_added_actions_edit.classList.add('edit');
        task_added_actions_edit.innerText = 'Edit';

        const task_added_actions_remove = document.createElement('button');
        task_added_actions_remove.classList.add('remove');
        task_added_actions_remove.innerText = 'Remove';

        task_added_actions.appendChild(task_added_actions_edit);
        task_added_actions.appendChild(task_added_actions_remove);

        task_added.appendChild(task_added_actions);

        lists.appendChild(task_added);

        addTask.value = '';

        task_added_actions_edit.addEventListener('click', (e) => {
            if (task_added_actions_edit.innerText.toLowerCase() == "edit") {
                task_added_actions_edit.innerText = "Save";
                task_added_content_input.removeAttribute("readonly");
                task_added_content_input.focus();
            } else {
                task_added_actions_edit.innerText = "Edit";
                task_added_content_input.setAttribute("readonly", "readonly");
            }
        });

        task_added_actions_remove.addEventListener('click', (e) => {
            lists.removeChild(task_added);
        });
    });
});