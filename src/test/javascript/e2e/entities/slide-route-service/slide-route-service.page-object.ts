import { element, by, ElementFinder } from 'protractor';

export class SlideComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-slide-route-service div table .btn-danger'));
    title = element.all(by.css('jhi-slide-route-service div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class SlideUpdatePage {
    pageTitle = element(by.id('jhi-slide-route-service-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    numberInput = element(by.id('field_number'));
    timingInput = element(by.id('field_timing'));
    textInput = element(by.id('field_text'));
    lectureSelect = element(by.id('field_lecture'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNumberInput(number) {
        await this.numberInput.sendKeys(number);
    }

    async getNumberInput() {
        return this.numberInput.getAttribute('value');
    }

    async setTimingInput(timing) {
        await this.timingInput.sendKeys(timing);
    }

    async getTimingInput() {
        return this.timingInput.getAttribute('value');
    }

    async setTextInput(text) {
        await this.textInput.sendKeys(text);
    }

    async getTextInput() {
        return this.textInput.getAttribute('value');
    }

    async lectureSelectLastOption() {
        await this.lectureSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async lectureSelectOption(option) {
        await this.lectureSelect.sendKeys(option);
    }

    getLectureSelect(): ElementFinder {
        return this.lectureSelect;
    }

    async getLectureSelectedOption() {
        return this.lectureSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class SlideDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-slide-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-slide'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
