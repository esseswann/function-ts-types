import { ApiGatewayAuthorizer } from "./api-gateway";
import { FunctionHandler } from "./functionHandler";
import { Http } from "./http";
import {
    Budget,
    CloudLogging,
    ContainerRegistry,
    DataStreams,
    IotCore,
    MessageQueue,
    ObjectStorage,
    Timer,
} from "./triggers";

export namespace Handler {
    export type ApiGatewayAuthorizer = FunctionHandler<
        ApiGatewayAuthorizer.Event,
        ApiGatewayAuthorizer.Result
    >;
    export type Http = FunctionHandler<Http.Event, Http.Result>;
    export type ObjectStorage = FunctionHandler<ObjectStorage.Event, any>;
    export type Timer = FunctionHandler<Timer.Event, any>;
    export type MessageQueue = FunctionHandler<MessageQueue.Event, any>;
    export type IotCore = FunctionHandler<IotCore.Event, any>;
    export type DataStreams = FunctionHandler<DataStreams.Event, any>;
    export type ContainerRegistry = FunctionHandler<ContainerRegistry.Event, any>;
    export type CloudLogging = FunctionHandler<CloudLogging.Event, any>;
    export type Budget = FunctionHandler<Budget.Event, any>;
}
