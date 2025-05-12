import { CreateCategory, FetchCategories, UpdateCategory, DeleteCategory } from "../queries/category";
import { FindCategoryNameById } from "../service/route";
import { FindCategoryIdByName } from "../service/route";

// export async function Test(){
//     const category_name = "test";
//     const category_name_update = "UpdatedTest";
//     try{
//     CreateCategory(category_name);
//     console.log(FetchCategories());
//     UpdateCategory(Number(await FindCategoryIdByName(category_name)), category_name_update);
//     console.log(FetchCategories());
//     console.log(FindCategoryNameById(Number(await FindCategoryIdByName(category_name_update))));
//     DeleteCategory(await FindCategoryIdByName(category_name_update));
//     console.log(FetchCategories());
//     console.log("Test completed successfully");
//     }
//     catch (e) {
//         console.error(e);
//         console.log("Test is fucked");
//         await DeleteCategory(category_name);
//         await DeleteCategory(category_name_update);
//     }
// }

// Test();

async function TestFetch(){
    try{
        const categories = await FetchCategories();
        console.log(categories);
        console.log("Test completed successfully");
    }
    catch (e) {
        console.error(e);
    }
}

async function TestCreate(){
    const category_name = "test";
    try{
        await CreateCategory(category_name);
        console.log(await FetchCategories());
        console.log("Test completed successfully");
    }
    catch (e) {
        console.error(e);
    }
}

async function TestFindIdByName(){
    const category_name = "test";
    try{
        const category_id = await FindCategoryIdByName(category_name);
        console.log(category_id);
        console.log("Test completed successfully");
    }
    catch (e) {
        console.error(e);
    }
}

async function TestFindNameById(){
    const category_name = "test";
    try{
        const category_id = await FindCategoryNameById(Number(await FindCategoryIdByName(category_name)));
        console.log(category_id);
        console.log("Test completed successfully");
    }
    catch (e) {
        console.error(e);
    }
}

async function testUpdate(){
    const category_name = "test";
    const category_name_update = "UpdatedTest";
    try{
        await UpdateCategory(Number(await FindCategoryIdByName(category_name)), category_name_update);
        console.log(await FetchCategories());
        console.log("Test completed successfully");
    }
    catch (e) {
        console.error(e);
    }
}

async function testDelete(){
    const category_name_update = "UpdatedTest";
    try{
        await DeleteCategory(Number(await FindCategoryIdByName(category_name_update)));
    }
    catch(e){
        console.error(e);
    }
}

async function TestAllQueries() {
    const category_name = "test";
    const category_name_update = "UpdatedTest";

    try {
        console.log("Testing CreateCategory...");
        await CreateCategory(category_name);
        console.log(await FetchCategories());

        console.log("Testing FindCategoryIdByName...");
        const category_id = await FindCategoryIdByName(category_name);
        console.log(category_id);

        console.log("Testing FindCategoryNameById...");
        const fetched_category_name = await FindCategoryNameById(Number(category_id));
        console.log(fetched_category_name);

        console.log("Testing UpdateCategory...");
        await UpdateCategory(Number(category_id), category_name_update);
        console.log(await FetchCategories());

        console.log("Testing DeleteCategory...");
        const updated_category_id = await FindCategoryIdByName(category_name_update);
        await DeleteCategory(Number(updated_category_id));
        console.log(await FetchCategories());

        console.log("All query tests completed successfully");
    } catch (e) {
        console.error(e);
        console.log("An error occurred during testing");
        try {
            await DeleteCategory(await FindCategoryIdByName(category_name));
            await DeleteCategory(await FindCategoryIdByName(category_name_update));
        } catch (cleanupError) {
            console.error("Error during cleanup:", cleanupError);
        }
    }
}

TestAllQueries();