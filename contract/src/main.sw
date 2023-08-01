contract;

use std::{
    storage::StorageMap,
};

storage {
    counter: u64 = 0,
    countLen: u64 = 0,
    points: StorageMap<u64, u64> = StorageMap {},
}

abi Counter {
    #[storage(read, write)]
    fn increment();

    #[storage(read, write)]
    fn decrement();

    #[storage(read)]
    fn count() -> u64;

    #[storage(read)]
    fn get_from_storage_map(index: u64) -> u64;

    #[storage(read, write)]
    fn insert_into_storage_map();
    
}

impl Counter for Contract {
    #[storage(read)]
    fn count() -> u64 {
        storage.counter
    }

    #[storage(read, write)]
    fn increment() {
        storage.counter = storage.counter + 1;
    }

    #[storage(read, write)]
    fn decrement() {
        storage.counter = storage.counter - 1;
    }

    #[storage(read)]
    fn get_from_storage_map(index: u64) -> u64 {
        let count = storage.points.get(index).unwrap();
        return count;
    }

    #[storage(read, write)]
    fn insert_into_storage_map() {
        storage.points.insert(storage.countLen, storage.counter);
        storage.countLen = storage.countLen + 1;
    }
}
