export type Repository<Entity> = () => Promise<Entity>
export type Builder<Repository, Entity> = (repository: Repository) => Promise<Entity>

export const DataBuilder = async (repository: Repository<any>): Promise<any> => await repository()
